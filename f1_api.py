import datetime
import requests

response = requests.get("https://api.openf1.org/v1/sessions?year=2025")
data = response.json()
for session in data:
     if session['session_type']== "Race":
          print(session['country_name'], session['circuit_short_name'], session['session_name'], session['date_start'])

   

