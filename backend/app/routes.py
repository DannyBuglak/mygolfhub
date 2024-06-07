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

    # TODO: LOGIC FOR SAVING USER TO DATABASE WILL BE HERE
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
    username = data.get('username')
    password = data.get('password')

    # TODO: PROCESS LOGIN HERE

    return jsonify({'message': 'Login successful'}), 200