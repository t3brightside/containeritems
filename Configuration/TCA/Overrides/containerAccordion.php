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
    ->setIcon('EXT:containeritems/Resources/Public/Icons/containerAccordion.svg')
);

$GLOBALS['TCA']['tt_content']['types']['containerAccordion']['showitem'] = str_replace(
    'header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header.ALT.div_formlabel,',
    'header;Title (shown in special cases only),header_layout,',
    $GLOBALS['TCA']['tt_content']['types']['containerAccordion']['showitem']
);
