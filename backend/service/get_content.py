from flask import jsonify
from model.models import *

def all_contents():
    content = Content()
    contents = content.query.all()
    contents_dict = {}
    contents_list = []
    for item in contents:
        contents_list.append({
            'id' : item.id,
            'thumbnail' : item.thumbnail,
            'title' : item.title,
            'rating' : item.rating,
            'genre' : item.genre.replace("'",""),
            'running_time' : item.running_time,
            'synop' : item.synop,
            'like':item.like,
            'key_words' : item.key_words,
            'year' : item.year
            })
    contents_dict['data'] = contents_list
    return jsonify(contents_dict)
