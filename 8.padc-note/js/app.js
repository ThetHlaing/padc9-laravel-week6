(function () {

    const model = {
        init: function () {
            if (!localStorage.notes) {
                this.save([]);
            }
        },
        add: function (obj) {
            const data = this.getAllNotes();
            obj.date = new Date();
            data.push(obj);
            this.save(data);
        },
        save: function (noteList) {
            console.log(noteList);
            localStorage.notes = JSON.stringify(noteList);
        },
        remove: function (note) {
            const data = this.getAllNotes();
            const updatedData = data.filter(
                (item) => item.content !== note
            );

            // for(const item of data){

            // }
            this.save(updatedData);

        },
        getAllNotes: function () {
            return JSON.parse(localStorage.notes);
        }
    };


    const octopus = {
        addNewNote: function (noteStr) {
            model.add({
                content: noteStr
            });
            view.render();
        },
        removeNote: function (noteStr) {
            model.remove(noteStr);
            view.render();
        },
        getNotes: function () {
            return model.getAllNotes().reverse();
        },
        init: function () {
            model.init();
            view.init();
        }
    };


    const view = {
        init: function () {
            this.noteList = $('#notes');
            const newNoteForm = $('#new-note-form');
            const newNoteContent = $('#new-note-content');
            // $(document).on('click', '.close', (e) => {
            //     console.log("Ready to delete");
            // })

            // const noteHolder = document.querySelector('#notes');

            // noteHolder.addEventListener("click",
            //     (e) => {
            //        if(e.target.classList.contains('close')){
            //         alert("Ready to delete")
            //        }

            //     })

            newNoteForm.submit(function (e) {
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });



            view.render();
        },
        render: function () {
            let htmlStr = '';
            octopus.getNotes().forEach(function (note) {
                htmlStr += `<li class="note" data-id="${note.content}">
                ${note.content}
                <span class='note-date'>${note.date}</span>
                <span class='close'>x</span></li>`;
            });
            this.noteList.html(htmlStr);

            const deleteButtons = document.querySelectorAll('.close');
            for (const button of deleteButtons) {
                button.addEventListener('click', (e) => {
                    const content = e.target.parentNode.dataset.id;
                    octopus.removeNote(content)

                    return alert("Ready to delete")
                });
            }
        }
    };

    octopus.init();
})();