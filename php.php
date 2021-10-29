<!DOCTYPE html>
<html>
<head>
    <style>
        div {
            display:inline-block;
            cursor:pointer;
            padding: 12px;
            text-align: center;
            user-select: none;
            font-family: monospace;
        }
    </style>
</head>
<body>

<form method="post">
    Name: <input type="text" name="name"><br>
    Second Box: <input type="text" name="email"><br>
    <input type="submit" name="submit"></input>
</form>

<?php



// comment

// global, cannot be accessed inside functions
// using static keyword will not delete the variable after the execution of the php

if(isset($_POST['submit'])) {
    echo "You Have Clicked Submit." ."<br>";
    sampleFunction();
}

function sampleFunction(){
    $name = ($_POST["name"]);
    // allows access to global with the keyword
    echo "You are: " .($_POST["name"]);
}

?> 

</body>
</html>