<?php

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerAccordion',
            'Accordion',
            'Each element inside will be shown as an accordion item',
            [
                [
                    ['name' => 'Accordion Elements', 'colPos' => 101],
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerAccordion.svg')
);


$tempColumns = array(

    'tx_containeritems_a_stayopen' => [
        'exclude' => 1,
        'label' => 'Stay Open',
        'description' => 'Items stay open until closed',
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
    'tx_containeritems_a_firstopen' => [
        'exclude' => 1,
        'label' => 'First Open',
        'description' => 'Open first item on page load',
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
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tt_content',
    $tempColumns
);

$GLOBALS['TCA']['tt_content']['types']['containerAccordion']['showitem'] = str_replace(
    'header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header.ALT.div_formlabel,',
    'header;Title (shown in special cases only),header_layout,tx_containeritems_classes,tx_containeritems_a_stayopen,tx_containeritems_a_firstopen,',
    $GLOBALS['TCA']['tt_content']['types']['containerAccordion']['showitem']
);
