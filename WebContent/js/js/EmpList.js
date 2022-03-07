Ext.onReady(function(){

    var containerPanel = Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        height: 225,
        width: '100%',
        title:'Movie Advance Search',
        layout: 'column',
		defaultType: 'textfield',
        //suspendLayout: true,
        //padding: 10,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Movie Name',
            margin : '10 0 0 350',
            name: 'title',
            enableKeyEvents: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Director Name',
            margin: '10 0 0 100',
            name: 'title',
            enableKeyEvents: true
        },{
        xtype: 'datefield',
        fieldLabel: 'Release Year',
        margin: '25 0 0 350',
        }, {
            xtype: 'combobox',
            fieldLabel: 'Language',

            store: Ext.create('Ext.data.Store', {

                fields: ['abbr', 'name'],
                    data: [{
                      'abbr': 'english',
                      'name': 'English'
                    },{
                      'abbr': 'Hindi',
                      'name': 'Hindi'
                    }]
                }),
                valueField: 'abbr',
                displayField: 'name',
                margin: '25 0 0 100',
        }],buttons: [{
            text: 'Search',
			margin: '0 50 0 0',
        }, {
            text: 'Reset',
			margin: '0 700 0 0'
        }],
    });

	Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [ 'title', 'decription', 'release year','language','director','rating','speacial feature' ]
    });

    var userStore = Ext.create('Ext.data.Store', {
    model: 'User',
	pageSize: 2,
    proxy: {
		type: 'ajax',
		url:'https://api.npoint.io/57012d9f0b1976a61045',
		},
		autoLoad:{start: 1, limit: 2},
    });
	
	

    Ext.create('Ext.grid.Panel', {
    renderTo: document.body,
    store: userStore,
    width: '100%',
    height: 350,
	//padding: 10,
	 dockedItems: Ext.create('Ext.PagingToolbar', {
            store: userStore,
            pageSize: 2, 
			dock: 'top',             
			buttons: [{
            text: 'Add',	
	    }, {
            text: 'Edit',
        },{
			text: 'Delete',
		}],
    }),
    title: 'Application Users',
    columns: [
        {
            text: 'Title',
            width: 300,
			filter:{
				type: 'string'
			},
            sortable: false,
            hideable: false,
            dataIndex: 'Title'
        },
        {
            text: 'Description',
            width: 600,
            dataIndex: 'Descreption',
        },
        {
            text: 'Releasing Year',
            flex: 1,
			filter:{
				type: 'number'
			},
            dataIndex: 'Release Year'
        },
        {
            text: 'Language',
            flex: 1,
			filter:{
				type: 'list',
				option: ['Hindi', 'English'],
			},
            dataIndex: 'Language'
        },
        {
            text: 'Director',
            flex: 1,
            dataIndex: 'Director'
        },
        {
            text: 'Rating',
            flex: 1,
            dataIndex: 'Rating'
        },
        {
            text: 'Special Feature',
            flex: 1,
            dataIndex: 'Special Feature'
        }
    ],
	plugins: 'gridfilters',
	id: 'testGrid',
	selModel:{
	injectCheckbox: 'first',
	checkOnly: true,
	model: 'SIMPLE',
	type: 'checkboxmodel',
	}
    });

    containerPanel.suspendLayout = false;
    containerPanel.updateLayout();
});