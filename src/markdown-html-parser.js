export default (string, options) => {
    return (
        string
            .replace(/^#\s(.+)/gim, '<span class="h1">$1</span>')
            .replace(/^#{2}\s(.+)/gim, '<span class="h2">$1</span>')
            .replace(/^#{3}\s(.+)/gim, '<span class="h3">$1</span>')
            .replace(/^#{4}\s(.+)/gim, '<span class="h4">$1</span>')
            .replace(/^#{5}\s(.+)/gim, '<span class="h5">$1</span>')
            .replace(/^#{6}\s(.+)/gim, '<span class="h6">$1</span>')
            .replace(/^[*+-]\s([^*].+)/gim, '<li class="li">$1</li>')
            .replace(/^(\*{3,}|-{3,})$/gim, '<div class="hr"></div>')
            .replace(/\*\*\s?([^*].+?)\s?\*\*/gim, '<span class="bold">$1</span>')
            .replace(/__\s?([^_].+?)\s?__/gim, '<span class="bold">$1</span>')
            .replace(/\*\s?([^*].+?)\s?\*/gim, '<span class="inclined">$1</span>')
            .replace(/_\s?([^_].+?)\s?_/gim, '<span class="inclined">$1</span>')
            .replace(/^(\d*\.)\s?(.+)/gim, '<span class="list">$1 $2</span>')
            .replace(/(?:^|\s|\n|[\wа-яА-Я0-9])\[(.+)\]\((.+)\s["'](.+)["']\)/gim, '<a href="$2" title="$3">$1</a>')
            .replace(/!\[(.+)\]\((.+)\s["'](.+)["']\)/gim, '<img src="$2" alt="$1" title="$3"/>')
            .replace(/`{1,2}<(.+)>`{1,2}/gim, '<span class="code">&lt;$1&gt;</span>')
            .replace(/^>\s(.+)/gim, '<span class="blockquote">&lt;$1&gt;</span>')
    )
}
