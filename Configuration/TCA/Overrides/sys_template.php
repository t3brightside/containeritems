<?php

defined('TYPO3_MODE') || die();

call_user_func(function () {

    $extensionKey = 'containeritems';

    /**
     * TypoScript Templates for inclusion
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript/Accordion',
        'Containeritems - Accordion'
    );

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript/Columns',
        'Containeritems - Columns'
    );

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript/Gather',
        'Containeritems - Gather'
    );

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript/Section',
        'Containeritems - Section'
    );

});
