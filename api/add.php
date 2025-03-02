<?php

updateStatistics();

function updateStatistics()
{
    $statsFile = 'data.json';
    $today = date('Y-m-d');
    $stats = [];
    if (file_exists($statsFile)) {
        $stats = json_decode(file_get_contents($statsFile), true);
    }

    if (!isset($stats['today_count']) || $stats['last_date'] != $today) {
        $stats['today_count'] = 0;
        $stats['last_date'] = $today;
    }

    $stats['today_count']++;
    $stats['total_count'] = isset($stats['total_count']) ? $stats['total_count'] + 1 : 1;

    file_put_contents($statsFile, json_encode($stats));
}
