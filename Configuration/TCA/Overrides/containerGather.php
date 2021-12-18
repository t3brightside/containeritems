<?php

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'containerGather',
            'Gather',
            'For gathering multiple elements into one container',
            [
                [
                    ['name' => 'Gather', 'colPos' => 101],
                ]
            ]
        )
    )
    ->setIcon('EXT:containeritems/Resources/Public/Icons/containerSection.svg')
);

$GLOBALS['TCA']['tt_content']['types']['containerGather']['showitem'] = str_replace(
    'header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header.ALT.div_formlabel,',
    'header;Title (shown in special cases only),header_layout,',
    $GLOBALS['TCA']['tt_content']['types']['containerGather']['showitem']
);
