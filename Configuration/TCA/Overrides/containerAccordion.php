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
    'tx_containeritems_a_autocollapse' => [
        'exclude' => 1,
        'label' => 'Auto Collapse',
        'description' => 'Collapse other items if new one is clicked',
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
    'header;Title (shown in special cases only),header_icon,header_layout,
    --palette--;Settings;accordionSettings,',
    $GLOBALS['TCA']['tt_content']['types']['containerAccordion']['showitem']
);

$GLOBALS['TCA']['tt_content']['palettes']['accordionSettings']['showitem'] = '
    tx_containeritems_classes,
    tx_containeritems_a_firstopen,
    tx_containeritems_a_autocollapse,
';
