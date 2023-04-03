```mermaid

    situationDiagram
        participant browser
        participant server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/spa.html
        activate server
        server-->>browser: the HTML document
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/main.css
        activate server
        server-->>browser: the CSS style sheet
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/spa.js
        activate server
        server-->>browser: the JavaScript file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/data.json
        activate server
        server-->>browser: the JSON raw data of the notes
        deactivate server
```