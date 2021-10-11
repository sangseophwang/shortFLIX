from flask import session
from model.models import *

def dislike_contents(content_id):
    user = User.query.filter_by(email = session['email']).first()
    content = Content.query.filter_by(id = content_id).first()
    
    prev = user.likes_list
    now = []
    if prev:

        for i in range(len(prev)):
            print(i, prev[i]['id'], content_id)
            if prev[i]['id'] == content_id:
                prev.pop(i)
                now = user.likes_list
                if content.like > 0:
                    content.like -= 1

                user.likes_list = now
                # db.session.add(user)
                db.session.commit() 

                break
            else:
                now = user.likes_list
                
    else:
        return 'empty'
                
    user.likes_list = now
    db.session.commit()  

    # '/detail'로 리다이렉트 예정     
    return 'dislike'     

  
