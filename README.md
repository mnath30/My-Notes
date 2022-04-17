# My Notes
 
 A web application to store all your notes in one place.
 
 ----
 
 ## Features
 
The web app provides the user with the ability to create new notes, archive notes, move the unwanted notes to the trash and also pin the important notes on top.
 
The *Notes* page displays the notes added by the user. The user can add the notes by clicking on the Create Note button on the *Notes* page and add the note title, tags and note content. The notes can be pinned to the top by clicking on the pin icon. The color of the notes can be changed by clicking on the color palette icon and then selecting the colors from the color dropdown. 
By clicking on the update icon, an existing note can be modified and saved.

The notes can also be moved to the archived section by clicking on the archive icon of the notes from the *Notes* page or from the *Trash* page. All the archived notes can be found in the *Archive* page. The notes can be unarchived by clicking on the unarchive icon from the *Archive* page and all the unarchived notes will be moved back to the *Notes* page.

The notes can be moved to the trash by clicking on the delete icon from the *Notes* page or from the *Archive* page. The notes moved to the trash can be seen in the *Trash* page. Once the user clicks on the delete icon in the *Trash* page for any note, that note is permanently deleted. The notes can be removed from the trash by clicking on the remove from bin icon and these notes will be moved back to the *Notes* page.

The notes can also be sorted by oldest first or newest first by selecting the respective radio buttons in the *Notes* page.
The search bar can be used to search the notes by note title or note content.

 ### Pages
 
 1. Notes

    1. [All Notes](https://my-notes-maker.netlify.app/)

 2. Archive

    1. [Archived Notes](https://my-notes-maker.netlify.app/archive) 

 3. Trash

    1. [Deleted Notes](https://my-notes-maker.netlify.app/trash)

Checkout the live application here [My Notes](https://my-notes-maker.netlify.app/)

## Technology used

My Notes is made using HTML, CSS, Javascript and React. It also makes use of the *Shuttle-UI* component library.
It is hosted using Netlify.

## To run app locally

To run the app locally, follow the below steps:

1. Clone the app 
```
git clone https://github.com/mnath30/My-Notes.git
```
2. Go to the folder
```
cd My-Notes
```
3. Install the dependencies
```
npm install
```

4. Run the app 
```
npm start
```



