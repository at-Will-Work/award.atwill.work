#!/usr/bin/env perl

# Movable Type (r) (C) 2001-2020 Six Apart Ltd. All Rights Reserved.
# This code cannot be redistributed without permission from www.sixapart.com.
# For more information, consult your Movable Type license.
#
# $Id$

use strict;

BEGIN {
    $ENV{MT_HOME}   = '/var/www/cms/app';
    $ENV{MT_CONFIG} = '/var/www/html/award/storysearch/mt-config-search.cgi';
}

use lib '../mt/lib';
use lib '../mt/extlib';

use lib $ENV{MT_HOME} ? "$ENV{MT_HOME}/lib" : 'lib';
use MT::Bootstrap App => 'MT::App::Search::ContentData';

