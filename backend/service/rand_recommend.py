from flask import Flask, render_template, session, request, url_for, redirect, flash, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from authlib.integrations.flask_client import OAuth
from model.models import *
import random

class RandRecommend:
    def random_contents(self):
        rand_id = random.sample(range(1,1095),50) 
        contents_dict = {}
        contents_list = []
        for nums in rand_id:
            item = Content.query.filter(Content.id == nums).first()
            contents_list.append({
                'id' : item.id,
                'thumbnail' : item.thumbnail,
                'title' : item.title,
                'rating' : item.rating,
                'genre' : item.genre.replace("'",""),
                'running_time' : item.running_time,
                'synop' : item.synop
                })
        contents_dict['data'] = contents_list
        return jsonify(contents_dict)
