<?php

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerSection',
            'Section',
            'Content section',
            [
                [
                    ['name' => 'Section Content', 'colPos' => 101],
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerSection.svg')
);


$tempColumns = array(
    'tx_containeritems_classes' => [
        'exclude' => 1,
        'label'   => 'Custom Classes',
        'config'  => [
            'type'     => 'input',
            'size' => 20,
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_aligncontent' => [
        'exclude' => 1,
        'label'   => 'Content Alignment',
        'config'  => [
            'type'     => 'select',
            'renderType' => 'selectSingle',
            'default' => 0,
            'items' => [
                ['Default', '0'],
                ['Center', 'center'],
                ['Left', 'left'],
                ['Right', 'right'],
            ],
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_framepadding' => [
        'exclude' => 1,
        'label'   => 'Frame Padding',
        'config'  => [
            'type'     => 'select',
            'renderType' => 'selectSingle',
            'default' => 0,
            'items' => [
                ['Default', '0'],
                ['None', 'none'],
                ['Small', 'small'],
            ],
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_fullwidth' => [
        'exclude' => 1,
        'label' => 'Full Width',
        'description' => 'Content will be full width of the viewport',
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
    'tx_containeritems_s_fullheight' => [
        'exclude' => 1,
        'label' => 'Full Height',
        'description' => 'Section always fills the full height of the viewport',
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
    'tx_containeritems_s_vcenter' => [
        'exclude' => 1,
        'label' => 'Vertically Center',
        'description' => 'Content will be placed vertically in middle of the section. Works with Full Height only',
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
    'tx_containeritems_s_textcolorselect' => [
        'exclude' => 1,
        'label'   => 'Text Color',
        'config'  => [
            'type'     => 'select',
            'renderType' => 'selectSingle',
            'default' => 0,
            'items' => [
                ['Default', '0'],
                ['Light', 'text-light'],
                ['Dark', 'text-dark'],
            ],
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_textcolor' => [
        'exclude' => 1,
        'label'   => 'Custom Text Color',
        'config'  => [
            'type'     => 'input',
            'size' => 10,
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_bgcolorselect' => [
        'exclude' => 1,
        'label'   => 'Background Color',
        'config'  => [
            'type'     => 'select',
            'renderType' => 'selectSingle',
            'default' => 0,
            'items' => [
                ['Default', '0'],
                ['Light', 'bg-light'],
                ['Dark', 'bg-dark'],
                ['Black', 'bg-black'],
            ],
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_bgcolor' => [
        'exclude' => 1,
        'label'   => 'Custom Background Color',
        'config'  => [
            'type'     => 'input',
            'size' => 10,
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_bgimagewidth' => [
        'exclude' => 1,
        'label'   => 'Image Width (px)',
        'config'  => [
            'type'     => 'input',
            'size' => 10,
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_bgimgeffect' => [
        'exclude' => 1,
        'label'   => 'Image Effect',
        'config'  => [
            'type'     => 'select',
            'renderType' => 'selectSingle',
            'default' => 0,
            'items' => [
                ['None', '0'],
                ['Lighten', '10'],
                ['Darken', '20'],
                ['Blur', '30'],
                ['Blur More', '40'],
            ],
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_bgvideosound' => [
        'exclude' => 1,
        'label' => 'Sound Button',
        'description' => 'Adds button to play background video sound',
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
    'tx_containeritems_s_bgvideoclearframe' => [
        'exclude' => 1,
        'label' => 'Clear Button',
        'description' => 'Adds button to remove content and overlay from the section to view the video',
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
    'tx_containeritems_s_bgvideoonoloop' => [
        'exclude' => 1,
        'label' => 'Loop',
        'description' => 'Keeps re-playing background video',
        'config' => [
            'type' => 'check',
            'renderType' => 'checkboxToggle',
            'items' => [
                [
                    0 => '',
                    1 => '',
                    'invertStateDisplay' => true,
                ]
            ],
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ]
    ],
    'tx_containeritems_s_bgplacement' => [
        'exclude' => 1,
        'label'   => 'Background Placement',
        'description' => 'Defines image and video placement related to the container',
        'config'  => [
            'type'     => 'select',
            'renderType' => 'selectSingle',
            'default' => 0,
            'items' => [
                ['Left Top', '1'],
                ['Left Center', '2'],
                ['Left Bottom', '3'],
                ['Center Top', '4'],
                ['Center Center', '0'],
                ['Center Bottom', '5'],
                ['Right Top', '6'],
                ['Right Center', '7'],
                ['Right Bottom', '8'],
            ],
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_bgfixed' => [
        'exclude' => 1,
        'label' => 'Fixed',
        'description' => 'Background does not scroll with the section',
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
    'tx_containeritems_s_bgoverlay' => [
        'exclude' => 1,
        'label'   => 'Overlay Color',
        'config'  => [
            'type'     => 'input',
            'size' => 10,
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_bgoverlaydark' => [
        'exclude' => 1,
        'label'   => 'Overlay Color (dark mode)',
        'config'  => [
            'type'     => 'input',
            'size' => 10,
            'behaviour' => [
                'allowLanguageSynchronization' => true,
            ],
        ],
    ],
    'tx_containeritems_s_bgoverlayopacity' => [
        'exclude' => 1,
        'label'   => 'Overlay Opacity',
        'description' => 'Numbers from 0 to 99',
        'config'  => [
            'type'     => 'input',
            'eval' => 'num',
            'size' => 1,
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

$GLOBALS['TCA']['tt_content']['types']['containerSection']['showitem'] = str_replace(
    'header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header.ALT.div_formlabel,',
    'header;Title (shown in special cases only),header_layout,
    --palette--;Settings;sectionSettings,
    --palette--;Colors;sectionColors,
    --palette--;Background Image;sectionBgImage,
    --palette--;Background Video;sectionBgVideo,
    --palette--;Background Settings;sectionBgSettings,',
    $GLOBALS['TCA']['tt_content']['types']['containerSection']['showitem']
);

$GLOBALS['TCA']['tt_content']['palettes']['sectionSettings']['showitem'] = '
    tx_containeritems_classes,
    tx_containeritems_s_aligncontent,
    tx_containeritems_s_framepadding,
    --linebreak--,
    tx_containeritems_s_fullheight,
    tx_containeritems_s_fullwidth,
    tx_containeritems_s_vcenter,
';
$GLOBALS['TCA']['tt_content']['palettes']['sectionColors']['showitem'] = '
    tx_containeritems_s_textcolorselect,
    tx_containeritems_s_textcolor,
    tx_containeritems_s_bgcolorselect,
    tx_containeritems_s_bgcolor,
';
$GLOBALS['TCA']['tt_content']['palettes']['sectionBgImage']['showitem'] = '
    image,
    --linebreak--,
    tx_containeritems_s_bgimagewidth,
    tx_containeritems_s_bgimgeffect,
';
$GLOBALS['TCA']['tt_content']['palettes']['sectionBgVideo']['showitem'] = '
    assets,
    --linebreak--,
    tx_containeritems_s_bgvideosound,
    tx_containeritems_s_bgvideoclearframe,
    tx_containeritems_s_bgvideoonoloop,
';
$GLOBALS['TCA']['tt_content']['palettes']['sectionBgSettings']['showitem'] = '
    tx_containeritems_s_bgplacement,
    tx_containeritems_s_bgfixed,
    --linebreak--,
    tx_containeritems_s_bgoverlay,
    tx_containeritems_s_bgoverlaydark,
    tx_containeritems_s_bgoverlayopacity,
';


$GLOBALS['TCA']['tt_content']['types']['containerSection']['columnsOverrides'] = array(
    'image' => [
        'label' => 'Image File',
        'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
            'image',
            [
                'behaviour' => [
                    'allowLanguageSynchronization' => true,
                ],
                'overrideChildTca' => [
                    'types' => [
                        '0' => [
                            'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                        ],
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
                            'showitem' => '
                            crop,
                            --palette--;;filePalette'
                        ],
                    ],
                ],
            ],
            'jpeg,jpg,png,gif'
        ),
    ],
    'assets' => [
        'label' => 'Video File',
        'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
            'assets',
            [
                'behaviour' => [
                    'allowLanguageSynchronization' => true,
                ],
            ],
            'mp4,ogg,webm'
        ),
    ],
);
