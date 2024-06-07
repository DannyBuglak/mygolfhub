import mysql.connector
import glob
import json
import csv
from io import StringIO
import itertools
import hashlib
import os
import time
import cryptography
from cryptography.fernet import Fernet
from math import pow

#########################################################
# DATABASE CLASS DEFINITION
#########################################################


class Database:
    
    def __init__(self, purge=False):
        # Grab information from the environment variables
        self.database = os.getenv('DATABASE_DB', 'mygolfhub')
        self.host = os.getenv('DATABASE_HOST', 'db')
        self.user = os.getenv('DATABASE_USER', 'user')
        self.port = int(os.getenv('DATABASE_PORT', 3306))
        self.password = os.getenv('DATABASE_PASSWORD', 'password')
        self.tables = ['users', 'bag', 'goals', 'scorecards']

        self.encryption = {
            'oneway': {
                'salt': b'averysaltysailortookalongwalkoffashortbridge',
                'n': int(pow(2, 5)),
                'r': 9,
                'p': 1
            },
            'reversible': {
                'key': '7pK_fnSKIjZKuv_Gwc--sZEMKn2zc8VvD6zS96XcNHE='
            }
        }

        self._wait_for_db()

    def _wait_for_db(self):
        retries = 5
        while retries > 0:
            try:
                cnx = mysql.connector.connect(
                    host=self.host,
                    user=self.user,
                    password=self.password,
                    port=self.port,
                    database=self.database
                )
                cnx.close()
                return
            except mysql.connector.errors.DatabaseError as e:
                retries -= 1
                print(f"Database connection failed: {e}. Retrying in 5 seconds...")
                time.sleep(5)
        raise Exception("Could not connect to the database after multiple retries.")

    def query(self, query="SELECT * FROM users", parameters=None):
        cnx = mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            port=self.port,
            database=self.database
        )

        cur = cnx.cursor(dictionary=True)
        if parameters:
            cur.execute(query, parameters)
        else:
            cur.execute(query)

        if cur.with_rows:
            rows = cur.fetchall()
        else:
            rows = None
            cnx.commit()

        if "INSERT" in query:
            cur.execute("SELECT LAST_INSERT_ID()")
            rows = cur.fetchall()
            cnx.commit()

        cur.close()
        cnx.close()
        return rows

    def createTables(self, purge=False, data_path='app/database/'):
        if purge:
            for table in self.tables[::-1]:
                self.query(f"""DROP TABLE IF EXISTS {table}""")

        for table in self.tables:
            with open(data_path + f"create_tables/{table}.sql") as read_file:
                create_statement = read_file.read()
            self.query(create_statement)

            try:
                params = []
                with open(data_path + f"initial_data/{table}.csv") as read_file:
                    scsv = read_file.read()
                for row in csv.reader(StringIO(scsv), delimiter=','):
                    params.append(row)

                cols = params[0]
                params = params[1:]
                self.insertRows(table=table, columns=cols, parameters=params)
            except Exception as e:
                print(f'No initial data for {table}, error: {e}')

    def insertRows(self, table, columns, parameters):
        col_names = ', '.join(columns)
        placeholders = ', '.join(['%s'] * len(columns))
        insert_statement = f"INSERT INTO {table} ({col_names}) VALUES ({placeholders})"

        cnx = mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            port=self.port,
            database=self.database
        )

        cur = cnx.cursor()
        cur.executemany(insert_statement, parameters)
        cnx.commit()
        cur.close()
        cnx.close()










#########################################################
# AUTHENTICATION RELATED
#########################################################

    def onewayEncrypt(self, string):
        encrypted_string = hashlib.scrypt(string.encode('utf-8'),
                                          salt = self.encryption['oneway']['salt'],
                                          n    = self.encryption['oneway']['n'],
                                          r    = self.encryption['oneway']['r'],
                                          p    = self.encryption['oneway']['p']
                                          ).hex()
        return encrypted_string

    def reversibleEncrypt(self, type, message):
        fernet = Fernet(self.encryption['reversible']['key'])
        
        if type == 'encrypt':
            message = fernet.encrypt(message.encode())
        elif type == 'decrypt':
            message = fernet.decrypt(message).decode()

        return message
    

    '''
    Create a user and add them to the database
    '''
    def createUser(self, email='example@email.com', password='password'):
    # Check if the user's email already exists
        sql = "SELECT email FROM users WHERE email = %s"
        userExists = self.query(query=sql, parameters=[email])
        
        # If user already exists, return failure
        if userExists:
            return {'failure': 1}
        
        encryptedPassword = self.reversibleEncrypt('encrypt', password)

        sql = "INSERT INTO users (email, password) VALUES (%s, %s)"
        self.query(query=sql, parameters=[email, encryptedPassword])

        return {'success': 1}
    

    '''
    Authenticate the user
    '''
    def authenticate(self, email='me@email.com', password='password'):
        # Get the saved password for this email
        sql = "SELECT password FROM users WHERE email = %s"
        currPass = self.query(query=sql, parameters=[email])

        # Check if a saved password and email exists exists
        if currPass:
            savedPassword = currPass[0]['password']
        
            # Encrypt the password submitted to test against saved password
            encryptedPassword = self.reversibleEncrypt('decrypt', savedPassword)

            # Check if the saved and entered passwords match
            if password == encryptedPassword:
                return {'success': 1}
            else:
                return {'failure': 0}
        else:
            return {'failure': 0}













#########################################################
# USER PROFILE RELATED
#########################################################











#########################################################
# SCORECARD RELATED
#########################################################













#########################################################
# GOALS RELATED
#########################################################
















#########################################################
# BAG RELATED
#########################################################
