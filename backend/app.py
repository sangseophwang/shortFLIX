from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from authlib.integrations.flask_client import OAuth
from view import create_app

create_app()