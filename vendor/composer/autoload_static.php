<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit35580fac615400d62f881c8589fadeae
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Facebook\\' => 9,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Facebook\\' => 
        array (
            0 => __DIR__ . '/..' . '/facebook/graph-sdk/src/Facebook',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit35580fac615400d62f881c8589fadeae::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit35580fac615400d62f881c8589fadeae::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit35580fac615400d62f881c8589fadeae::$classMap;

        }, null, ClassLoader::class);
    }
}
