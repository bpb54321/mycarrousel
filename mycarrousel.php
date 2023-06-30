<?php
if (!defined('_PS_VERSION_')) {
    exit;
}

class MyCarrousel extends Module
{
    public function __construct()
    {
        $this->name = 'mycarrousel';
        $this->tab = 'front_office_features';
        $this->version = '1.0.0';
        $this->author = 'Brian Blosser';
        $this->need_instance = 0;
        $this->ps_versions_compliancy = [
            'min' => '1.7.0.0',
            'max' => '8.99.99',
        ];
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l('My Carrousel');
        $this->description = $this->l('An image carrousel similar to the one seen on Decathlon.com');

        $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');
    }

    public function install()
    {
        return parent::install() &&
				$this->registerHook('displayHome') &&
                $this->registerHook('actionFrontControllerSetMedia');
    }

    public function hookActionFrontControllerSetMedia()
    {
        $this->context->controller->registerStylesheet(
            'mycarrousel-style',
            'modules/' . $this->name . '/views/assets/index.css',
            [
                'media' => 'all',
                'priority' => 1000,
            ]
        );

        $this->context->controller->registerJavascript(
            'mycarrousel-javascript',
            'modules/' . $this->name . '/views/assets/index.js',
            [
                'position' => 'bottom',
                'priority' => 1000,
            ]
        );

    }

		public function hookDisplayHome()
    {
        return $this->display(__FILE__, 'mycarrousel.tpl');
    }

}
