FROM  python:3.8.13-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /BACKEND

RUN pip install asgiref==3.5.2 Django==4.0.6 django-cors-headers==3.13.0 djangorestframework==3.13.1 djangorestframework-simplejwt==5.2.0 Pillow==9.4.0 PyJWT==1.7.1 pytz==2022.1 sqlparse==0.4.2 tzdata==2022.7

COPY . . 

EXPOSE 8000