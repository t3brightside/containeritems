<?php
defined('TYPO3_MODE') || die();

call_user_func(function()
{
  /**
   * Temporary variables
   */
  $extensionKey = 'microtemplate';

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
    'Configuration/TypoScript/Grids',
    'Containeritems - Grids'
  );

  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/Grids',
    'Containeritems - Sections'
  );
});
