[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15477902&assignment_repo_type=AssignmentRepo)
# P2-Challenge-2 (Client Side)

> Tuliskan API Docs kamu di sini

# P2-Challenge-2 (Client Side)

> Link Deployment
untuk CMS
<https://riannurul-h8-gc2-server.web.app/>
untuk Public
<https://riannurul-h8-gc2.web.app/pub/posts/>

Pointing ke Domain Pribadi:
Belum bisa.

## User Login Info

> `Admin`

- Email: <admin@mail.com>
- Password: 1234567

> `Staff`

- Email: <staff@mail.com>
- Password: 1234567


## Endpoint List


### Public
- Homepage:


    ```
    /pub/posts
    ```


- Detail Page:


    ```
    /pub/posts/:id
    ```

### CMS
- Login:


    ```
    /login
    ```

# Authorization required

- Register:

    ```
    /register
    ```

- Homepage:


    ```
    /
    ```

- Category List:


    ```
    /category
    ```


- Create Post:


    ```
    /create-post
    ```


- Edit Post:


    ```
    /post/edit/:id
    ```


- Edit Image (Patch):


    ```
    /post/patch-img/:id
    ```
