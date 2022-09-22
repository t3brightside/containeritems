<?php

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerGather',
            'Gather',
            'Gather multiple elements to one',
            [
                [
                    ['name' => 'Gather', 'colPos' => 101],
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/Containers/containerGather.svg')
);

$GLOBALS['TCA']['tt_content']['types']['containerGather']['showitem'] = str_replace(
    'header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header.ALT.div_formlabel,',
    'header;Title (shown in special cases only),header_layout,
    tx_containeritems_classes,',
    $GLOBALS['TCA']['tt_content']['types']['containerGather']['showitem']
);
