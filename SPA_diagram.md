# Single Page App (SPA) Diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET /main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /spa.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: JavaScript executes and fetches existing notes

    browser->>server: GET /data.json
    activate server
    server-->>browser: JSON data with saved notes
    deactivate server

    Note right of browser: Notes are dynamically rendered without reloading the page
