import './discord';
import Alpine from 'alpinejs';
import Button from './components/Button';
import LargeButton from './components/LargeButton';
import YoutubeEmbed from './components/YoutubeEmbed';

// Register the LargeButton plugin with Alpine
Alpine.plugin(Button);
Alpine.plugin(LargeButton);
Alpine.plugin(YoutubeEmbed);

// Start Alpine.js after the plugin has been registered
window.Alpine = Alpine;

Alpine.start();
