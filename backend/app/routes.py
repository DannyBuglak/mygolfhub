from flask import current_app as app
from flask import Blueprint, render_template, redirect, request, session, url_for, copy_current_request_context, jsonify
import json
import random
import functools

main = Blueprint('main', __name__)

###############################################
# AUTHENTICATION RELATED
###############################################

'''
Process the registration of a user
'''
@main.route('/api/processregister', methods=["POST", "GET"])
def processregister():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    confirmPassword = data.get('confirmPassword')

    if not username or not password or not confirmPassword:
        return jsonify({'error': 'Missing data'}), 400

    if password != confirmPassword:
        return jsonify({'error': 'Passwords do not match'}), 400

    # TODO: LOGIC FOR SAVING USER TO DATABASE WILL BE HERE
    return jsonify({'message': 'Registration successful'}), 201