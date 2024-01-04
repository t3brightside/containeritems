<?php

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerColumns-1-1',
            '2 Columns',
            'Layout with two equal columns',
            [
                [
                    ['name' => 'Left', 'colPos' => 101],
                    ['name' => 'Right', 'colPos' => 102]
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerColumns-1-1.svg')
);


\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerColumns-2-1',
            '2 Columns 60/40',
            'Layout with two columns, wider left',
            [
                [
                    ['name' => 'Wider Left', 'colPos' => 101],
                    ['name' => 'Right', 'colPos' => 102]
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerColumns-2-1.svg')
);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerColumns-1-2',
            '2 Columns 40/60',
            'Layout with two columns, wider right',
            [
                [
                    ['name' => 'Left', 'colPos' => 101],
                    ['name' => 'Wider Right', 'colPos' => 102]
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerColumns-1-2.svg')
);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerColumns-1-1-1',
            '3 Columns',
            'Layout with three equal columns',
            [
                [
                    ['name' => 'Left', 'colPos' => 101],
                    ['name' => 'Middle', 'colPos' => 102],
                    ['name' => 'Right', 'colPos' => 103]
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerColumns-1-1-1.svg')
);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerColumns-1-1-1-1',
            '4 Columns',
            'Layout with four equal columns',
            [
                [
                    ['name' => 'Left', 'colPos' => 101],
                    ['name' => 'Middle Left', 'colPos' => 102],
                    ['name' => 'Middle Right', 'colPos' => 103],
                    ['name' => 'Right', 'colPos' => 104]
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerColumns-1-1-1-1.svg')
);

$GLOBALS['TCA']['tt_content']['types']['containerColumns-1-1']['showitem'] = str_replace(
    'header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header.ALT.div_formlabel,',
    'header;Title (shown in special cases only),header_icon,header_layout,
    tx_containeritems_classes,',
    $GLOBALS['TCA']['tt_content']['types']['containerColumns-1-1']['showitem']
);

$GLOBALS['TCA']['tt_content']['types']['containerColumns-2-1']['showitem'] = $GLOBALS['TCA']['tt_content']['types']['containerColumns-1-1']['showitem'];
$GLOBALS['TCA']['tt_content']['types']['containerColumns-1-2']['showitem'] = $GLOBALS['TCA']['tt_content']['types']['containerColumns-1-1']['showitem'];
$GLOBALS['TCA']['tt_content']['types']['containerColumns-1-1-1']['showitem'] = $GLOBALS['TCA']['tt_content']['types']['containerColumns-1-1']['showitem'];
$GLOBALS['TCA']['tt_content']['types']['containerColumns-1-1-1-1']['showitem'] = $GLOBALS['TCA']['tt_content']['types']['containerColumns-1-1']['showitem'];
