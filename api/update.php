<?php

/**
 * 本地文件上传
 * @author: 阿珏 (QQ群：712473912)
 * @link: http://www.52ecy.cn
 * @version: 1.1
 */

$file = $_FILES['file'];
if (is_uploaded_file($file['tmp_name'])) {
    $arr = pathinfo($file['name']);
    $ext_suffix = $arr['extension'];
    $allow_suffix = array('jpg', 'gif', 'jpeg', 'png');
    if (!in_array($ext_suffix, $allow_suffix)) {
        msg(['code' => 1, 'msg' => '上传格式不支持']);
    }

    if (!is_dir('upload')) {
        mkdir('upload', 0755, true);
    }

    $new_filename = 'upload/' . time() . rand(100, 1000) . '.' . $ext_suffix;

    if (move_uploaded_file($file['tmp_name'], $new_filename)) {
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https://' : 'http://';
        $domain = $_SERVER['HTTP_HOST'];

        $file_url = $protocol . $domain . '/' . $new_filename;

       

        msg(['code' => 0, 'msg' => $file_url]);
    } else {
        msg(['code' => 1, 'msg' => '上传失败']);
    }
} else {
    msg(['code' => 1, 'msg' => '上传数据有误']);
}

function msg($data)
{
    exit(json_encode($data));
}
