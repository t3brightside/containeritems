<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Containeritems',
    'description' => 'EXT:container layouts for columns, accordions, carousels, content sections and boxes. Demo at: https://microtemplate.t3brightside.com',
    'category' => 'fe',
    'version' => '4.0.0',
    'state' => 'beta',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'constraints' => [
      'depends' => [
        'typo3' => '10.4.0-12.99.99',
        'fluid_styled_content' => '10.4.0-12.99.99',
        'container' => '1.4.0-2.99.99',
      ],
    ],
  ];
