<?php
    $content = '';
    foreach ($_POST as $key => $value) {
        if($value){
            $content .= "<b>$key/b>: <i>$value</i>\n";
        }
    }
    if(trim($content)){
        $content = "<b>Message form Site:</b>\n".$content;
        $apiToken = "6725841625:AAEvPLKn6lpB0y6bsjaITMdmb1k2yLqwCEo";
        $data = [
            'chat_id' => '@Onlysend_messagebots',
            'text' => $content,
            'parse_mode' => 'HTML'
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMassage?".http_build_query($data));
    }
?>
