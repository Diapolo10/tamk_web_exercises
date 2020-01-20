#!/usr/bin/env python3

import datetime
from pathlib import Path

def new_project():
    current_date = datetime.datetime.now()
    current_dir = Path(__file__).parent.resolve()
    
    project = current_dir / current_date.strftime('%Y_%m_%d')
    src = project / 'src'
    
    if not project.exists():

        project.mkdir()
        src.mkdir()

        with open(project / 'push_source_to_server.sh', 'w') as f:
            f.write(f"scp src/* e8lliuha@shell.tamk.fi:/home/study12/e8lliuha/public_html/vko{current_date.strftime('%V').lstrip('0')}")
    
        with open(src / 'index.html', 'w') as f:
            f.write("<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <title>Hello, world!</title>\n    </head>\n    <body>\n        <h1>Hello, world!</h1>\n    </body>\n</html>")

        print("Done")
    
    else:
        print("Project already exists")

if __name__ == "__main__":
    new_project()
