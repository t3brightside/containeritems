<?php

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerSiema',
            'Siema Carousel',
            'Simple content element carousel',
            [
                [
                    ['name' => 'Carousel Items', 'colPos' => 101],
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerSiema.svg')
);

$tempColumns = array(
    'tx_containeritems_siema_style' => [
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
    'tx_containeritems_siema_pagination' => [
        'exclude' => 1,
        'label'   => 'Pagination',
        'description' => 'Pagination style',
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
    'tx_containeritems_siema_loop' => [
        'exclude' => 1,
        'label' => 'Loop',
        'description' => 'Loop through carousel items',
        'config' => [
            'type' => 'check',
            'renderType' => 'checkboxToggle',
            'items' => [
                [
                    0 => '',
                    1 => '',
                ]
            ],
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ]
    ],
    'tx_containeritems_siema_nav' => [
        'exclude' => 1,
        'label' => 'Navigation',
        'description' => 'Show navigation buttons',
        'config' => [
            'type' => 'check',
            'default' => '1',
            'renderType' => 'checkboxToggle',
            'items' => [
                [
                    0 => '',
                    1 => '',
                ]
            ],
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ]
    ],
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tt_content',
    $tempColumns
);

$GLOBALS['TCA']['tt_content']['types']['containerSiema']['showitem'] = str_replace(
    'header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header.ALT.div_formlabel,',
    'header;Title (not shown),header_layout,tx_containeritems_classes,tx_containeritems_siema_style,tx_containeritems_siema_pagination,tx_containeritems_siema_loop,tx_containeritems_siema_nav,',
    $GLOBALS['TCA']['tt_content']['types']['containerSiema']['showitem']
);
