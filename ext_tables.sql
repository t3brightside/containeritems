CREATE TABLE tt_content (
	tx_containeritems_a_stayopen int(1) DEFAULT '0' NOT NULL,
	tx_containeritems_a_firstopen int(1) DEFAULT '0' NOT NULL,
	tx_containeritems_classes varchar(25),
	tx_containeritems_s_aligncontent varchar(25),
  tx_containeritems_s_framepadding int(1) DEFAULT '0' NOT NULL,
	tx_containeritems_s_fullwidth int(1) DEFAULT '0' NOT NULL,
  tx_containeritems_s_fullheight int(1) DEFAULT '0' NOT NULL,
  tx_containeritems_s_vcenter int(1) DEFAULT '0' NOT NULL,
	tx_containeritems_s_textcolorselect varchar(25),
	tx_containeritems_s_textcolor varchar(25),
	tx_containeritems_s_bgcolorselect varchar(25),
	tx_containeritems_s_bgcolor varchar(25),
	tx_containeritems_s_bgimagewidth varchar(25),
	tx_containeritems_s_bgimgeffect varchar(25),
	tx_containeritems_s_bgvideosound int(1) DEFAULT '0' NOT NULL,
  tx_containeritems_s_bgvideoclearframe int(1) DEFAULT '0' NOT NULL,
  tx_containeritems_s_bgvideoonoloop int(1) DEFAULT '0' NOT NULL,
	tx_containeritems_s_bgplacement varchar(25),
	tx_containeritems_s_bgfixed int(1) DEFAULT '0' NOT NULL,
	tx_containeritems_s_bgoverlay varchar(25),
	tx_containeritems_s_bgoverlaydark varchar(25),
	tx_containeritems_s_bgoverlayopacity varchar(25),
);
