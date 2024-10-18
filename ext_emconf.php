<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Containeritems',
    'description' => 'EXT:container layouts for columns, accordions, carousels, content sections and boxes. Demo at: https://microtemplate.t3brightside.com',
    'category' => 'fe',
    'version' => '5.0.0',
    'state' => 'stable',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'constraints' => [
      'depends' => [
        'typo3' => '11.5.0-13.99.99',
        'fluid_styled_content' => '11.5.0-13.99.99',
        'container' => '2.3.0-3.99.99',
        'embedassets' => '1.2.0-1.99.99',
      ],
    ],
  ];
