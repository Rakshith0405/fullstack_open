# Sequence Diagram - Loading a Page with JavaScript

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET /main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server


    browser->>server: GET /data.json
    activate server
    server-->>browser: JSON data
    deactivate server


