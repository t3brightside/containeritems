<?php

defined('TYPO3_MODE') || die();

call_user_func(function () {
    /**
     * Temporary variables
     */
    $extensionKey = 'containeritems';

    /**
     * Default TypoScript for Microtemplate
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
        'Configuration/TypoScript/Section',
        'Containeritems - Section'
    );
});
