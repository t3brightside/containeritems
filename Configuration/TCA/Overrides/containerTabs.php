<?php

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerTabs',
            'Tabs',
            'Each element inside will be shown as a tab item',
            [
                [
                    ['name' => 'Tab Elements', 'colPos' => 101],
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerTabs.svg')
);

$GLOBALS['TCA']['tt_content']['types']['containerTabs']['showitem'] = str_replace(
    'header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header.ALT.div_formlabel,',
    'header;Title (shown in special cases only),header_layout,tx_containeritems_classes,',
    $GLOBALS['TCA']['tt_content']['types']['containerTabs']['showitem']
);
