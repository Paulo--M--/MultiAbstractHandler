<?php
$abstracts = [];
foreach ($_POST['abstracts'] as $abstract) {
	if ($abstract['AbstID'] == 0) {
		$abstract['AbstID'] = rand(0,99999);
	}
	$abstracts[] = $abstract;
}

echo json_encode(compact('abstracts'), JSON_NUMERIC_CHECK);