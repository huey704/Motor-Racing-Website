import datetime
import requests

response = requests.get("https://api.openf1.org/v1/sessions?meeting_key=latest&year=2026")
data = response.json()

first = True
for session in data:
    if first:
        print(session["circuit_short_name"],":", session["country_name"])
        first = False

    if session['session_type']== "Practice":
          print(session['session_name'],":", session['date_start'])
    
    elif session['session_type']== "Qualifying":
        print(session['session_name'],":", session['date_start'])

    elif session['session_type']== "Race":
        print(session['session_name'],":", session['date_start'])

   


