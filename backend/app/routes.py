from flask import current_app as app
from flask import Blueprint, render_template, redirect, request, session, url_for, copy_current_request_context, jsonify
import json
import random
import functools

from .utils.database.database import Database
db = Database()

main = Blueprint('main', __name__)

###############################################
# AUTHENTICATION RELATED
###############################################

'''
Retrieves the email from the session if available
'''
@main.route('/api/getuser', methods=['GET'])
def getUser():
    # Decrypt the email if it is in the current session cookie
    if 'email' in session:
        return db.reversibleEncrypt('decrypt', session['email'])
    else:
        return 'Unknown'
    

'''
Log the user out, remove the email from the session and redirect to the login screen
'''
@main.route('/logout')
def logout():
	session.pop('email', default=None)
	return redirect('/')


'''
Process the registration of a user
'''
@main.route('/api/processregister', methods=["POST"])
def processregister():
    data = request.get_json()
    print(data)
    username = data.get('username')
    password = data.get('password')
    confirmPassword = data.get('confirmPassword')

    if not username or not password or not confirmPassword:
        return jsonify({'error': 'Missing data'}), 400

    if password != confirmPassword:
        return jsonify({'error': 'Passwords do not match'}), 400

    createUser = db.createUser(email = username, password = password)
    
    if createUser.get('success') == 1:
        return jsonify({'message': 'Registration successful'}), 200
    
    return jsonify({'message': 'Registration Failure'}), 500


'''
Process the login of a user
'''
@main.route('/api/processlogin', methods=["POST"])
def processlogin():
    data = request.get_json()
    print(data)
    username = data.get('username')
    password = data.get('password')

    # Authenticate the login
    loginAuth = db.authenticate(email=username, password=password)

    if loginAuth.get('success') == 1:
        session['email'] = db.reversibleEncrypt('encrypt', username)
        return jsonify({'message': 'Login successful'}), 200

    return jsonify({'message': 'Login failure'}), 500

