﻿var del = {
    init: function () {
        del.resEvents();
    },
    resEvents: function () {
        $("a#btnCateTaskDelete").off('click').on('click', function (e) {
            e.preventDefault();
            var result = confirm("Are you sure to delete?");
            if (result) {
                var id = $(this).data("id");
                del.deleteCategoryTasks(id);
            }
        })

        $("a#btnTaskDelete").off('click').on('click', function (e) {
            e.preventDefault();
            var result = confirm("Are you to delete this task?");
            if (result) {
                var id = $(this).data("id");
                del.deleteTasks(id);
            }
        })
    },
    deleteCategoryTasks: function (id) {
        $.ajax({
            url: "/CategoryTasks/Delete",
            type: "POST",
            dataType: "json",
            data: {
                id: id
            },
            success: function (res) {
                if (res.status) {
                    window.location.href = "/cates";
                }
                else {
                    alert(res.message);
                }
            }
        })
    },
    deleteTasks: function (id) {
        $.ajax({
            url: "/Tasks/Delete",
            type: "POST",
            dataType: "json",
            data: {
                id: id
            },
            success: function (res) {
                if (res.status) {
                    window.location.href = "/tasks";
                }
                else {
                    alert(res.message);
                }
            }
        })
    }
};
del.init();