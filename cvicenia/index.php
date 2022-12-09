<?php

    $data = [
        ["name"=>"lubiku", "id"=>"1"],
        ["name"=>"sofinecka bublinecka kukuricka najviac hot", "id"=>"2"]
    ];

    function write_users($data){
        $str = json_encode($data);
        file_put_contents("data.json", $str);
    }

    function list_users() {
        $str2 = file_get_contents("data.json");
        return json_decode($str2, true);
    }

    function get_user($id) {
        $users = list_users();
        foreach ($users as $user) {
            if ($user["id"] == $id) return $user;
        }
    }

    function add_user() {
        $users = list_users();
        $user = ["name"=>$name, "id"=>uniqid()];
    }

    function remove_user() {
        $users = list_users();
        $removed = [];
        foreach ($users as $user) {
            if ($user["id"] != $id) $removed[] = $user;
        }
        write_users($removed);
    }

    function edit_user() {
        $users = list_users();
        foreach ($users as $key=>$user) {
            if ($user["id"] == $id) $removed[] = $users[$key]["name"] = $name;
        }
        write_users($removed);
    }

    function edit_user_2() {
        $users = list_users();
        foreach ($users as &$user) {
            if ($user["id"] == $id) $user["name"] = $name;
        }
        write_users($removed);
    }

?>