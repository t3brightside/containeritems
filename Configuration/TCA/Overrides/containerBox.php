<?php

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerBox',
            'Box',
            'Box with predefined styles',
            [
                [
                    ['name' => 'Box Content', 'colPos' => 101],
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerBox.svg')
);

$tempColumns = array(
    'tx_containeritems_b_style' => [
        'exclude' => 1,
        'label'   => 'Style',
        'config'  => [
            'type'     => 'select',
            'renderType' => 'selectSingle',
            'default' => 0,
            'items'    => array(),
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tt_content',
    $tempColumns
);

$GLOBALS['TCA']['tt_content']['types']['containerBox']['showitem'] = str_replace(
    'header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header.ALT.div_formlabel,',
    'header;Title (not shown),header_icon,header_layout,tx_containeritems_classes,tx_containeritems_b_style,',
    $GLOBALS['TCA']['tt_content']['types']['containerBox']['showitem']
);
