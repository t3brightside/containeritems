<?php
defined('TYPO3') || die('Access denied.');

call_user_func(function () {

    $extensionKey = 'containeritems';

    /**
     * TypoScript Templates for inclusion
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript',
        'Containeritems'
    );
});
