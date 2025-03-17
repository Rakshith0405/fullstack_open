# New Note in Single Page App (SPA) Diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User types a new note and clicks "Save"

    browser->>server: POST /new_note with JSON data
    activate server
    server-->>browser: 201 Created (Note saved successfully)
    deactivate server

    Note right of browser: JavaScript updates the UI dynamically

    browser-->>browser: Adds new note to the page without reloading
