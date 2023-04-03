```mermaid

    situationDiagram
        participant browser
        participant server

        brower->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes/new_note
        activate server
        server-->>browser: HTTP status code 302
        deactivate server

        browser->>server: GET /notes
        activate server
        server-->>browser: Notes page
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/main.css
        activate server
        server-->>browser: the style sheet
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/main.js
        activate server
        server-->>browser: the JavaScript file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/data.json
        activate server
        server-->>browser: the raw data of the notes
        deactivate server
``` 