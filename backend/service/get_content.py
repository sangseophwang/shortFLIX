from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from authlib.integrations.flask_client import OAuth
from model.models import *

class GetContents:

    def all_contents(self):
        content = Content()
        contents = content.query.all()
        contents_dict = {}
        contents_list = []
        for item in contents:
            contents_dict['data'] = contents_list
            contents_list.append({
                'id' : item.id,
                'thumbnail' : item.thumbnail,
                'title' : item.title,
                'rating' : item.rating,
                'genre' : item.genre.replace("'",""),
                'running_time' : item.running_time,
                'synop' : item.synop
                })

        return jsonify(contents_dict)
