<?php
  $EM_CONF[$_EXTKEY] = [
    'title' => 'Containeritems',
    'description' => 'EXT:container layouts for columns, accordions and content sections. Demo at: https://microtemplate.t3brightside.com',
    'category' => 'fe',
    'version' => '2.0.1',
    'state' => 'stable',
    'clearCacheOnLoad' => 1,
    'author' => 'Tanel Põld',
    'author_email' => 'tanel@brightside.ee',
    'author_company' => 'Brightside OÜ',
    'constraints' => [
      'depends' => [
        'typo3' => '10.4.0-11.5.99',
        'fluid_styled_content' => '10.4.0-11.5.99',
        'container' => '1.4.0-1.99.99',
      ],
    ],
  ];
