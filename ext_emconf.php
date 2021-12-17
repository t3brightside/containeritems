<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Containeritems',
    'description' => 'Container elements like column grids, accordion, page sections etc.',
    'category' => 'fe',
    'version' => '0.0.1',
    'state' => 'stable',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'constraints' => [
      'depends' => [
        'typo3' => '11.5.0-11.5.99',
        'fluid_styled_content' => '11.5.0-11.5.99',
        'container' => '1.4.0-1.99.99',
      ],
    ],
  ];
