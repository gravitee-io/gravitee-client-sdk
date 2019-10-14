export class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
        this.encoder = configurationParameters.encoder;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length === 0) {
            return undefined;
        }
        const type = contentTypes.find((x) => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length === 0) {
            return undefined;
        }
        const type = accepts.find((x) => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBvcnRhbC13ZWJjbGllbnQvIiwic291cmNlcyI6WyJjb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLE1BQU0sT0FBTyxhQUFhO0lBU3RCLFlBQVksMEJBQW1ELEVBQUU7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxXQUFXLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7UUFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLHVCQUF1QixDQUFFLFlBQXNCO1FBQ2xELElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxNQUFNLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGtCQUFrQixDQUFDLE9BQWlCO1FBQ3ZDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLFVBQVUsQ0FBQyxJQUFZO1FBQzFCLE1BQU0sUUFBUSxHQUFXLElBQUksTUFBTSxDQUFDLCtEQUErRCxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFHLE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLDZCQUE2QixDQUFDLENBQUM7SUFDMUcsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFBhcmFtZXRlckNvZGVjIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzIHtcbiAgICBhcGlLZXlzPzoge1sga2V5OiBzdHJpbmcgXTogc3RyaW5nfTtcbiAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xuICAgIGJhc2VQYXRoPzogc3RyaW5nO1xuICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgZW5jb2Rlcj86IEh0dHBQYXJhbWV0ZXJDb2RlYztcbn1cblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICAgIGFwaUtleXM/OiB7WyBrZXk6IHN0cmluZyBdOiBzdHJpbmd9O1xuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xuICAgIGFjY2Vzc1Rva2VuPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG4gICAgYmFzZVBhdGg/OiBzdHJpbmc7XG4gICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICBlbmNvZGVyPzogSHR0cFBhcmFtZXRlckNvZGVjO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvblBhcmFtZXRlcnM6IENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgICAgdGhpcy5hcGlLZXlzID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuYXBpS2V5cztcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLnVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMucGFzc3dvcmQ7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBjb25maWd1cmF0aW9uUGFyYW1ldGVycy5hY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLmJhc2VQYXRoO1xuICAgICAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLndpdGhDcmVkZW50aWFscztcbiAgICAgICAgdGhpcy5lbmNvZGVyID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuZW5jb2RlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGNvcnJlY3QgY29udGVudC10eXBlIHRvIHVzZSBmb3IgYSByZXF1ZXN0LlxuICAgICAqIFVzZXMge0BsaW5rIENvbmZpZ3VyYXRpb24jaXNKc29uTWltZX0gdG8gZGV0ZXJtaW5lIHRoZSBjb3JyZWN0IGNvbnRlbnQtdHlwZS5cbiAgICAgKiBJZiBubyBjb250ZW50IHR5cGUgaXMgZm91bmQgcmV0dXJuIHRoZSBmaXJzdCBmb3VuZCB0eXBlIGlmIHRoZSBjb250ZW50VHlwZXMgaXMgbm90IGVtcHR5XG4gICAgICogQHBhcmFtIGNvbnRlbnRUeXBlcyAtIHRoZSBhcnJheSBvZiBjb250ZW50IHR5cGVzIHRoYXQgYXJlIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAgICogQHJldHVybnMgdGhlIHNlbGVjdGVkIGNvbnRlbnQtdHlwZSBvciA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IGlmIG5vIHNlbGVjdGlvbiBjb3VsZCBiZSBtYWRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RIZWFkZXJDb250ZW50VHlwZSAoY29udGVudFR5cGVzOiBzdHJpbmdbXSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChjb250ZW50VHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRlbnRUeXBlcy5maW5kKCh4OiBzdHJpbmcpID0+IHRoaXMuaXNKc29uTWltZSh4KSk7XG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50VHlwZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBjb3JyZWN0IGFjY2VwdCBjb250ZW50LXR5cGUgdG8gdXNlIGZvciBhIHJlcXVlc3QuXG4gICAgICogVXNlcyB7QGxpbmsgQ29uZmlndXJhdGlvbiNpc0pzb25NaW1lfSB0byBkZXRlcm1pbmUgdGhlIGNvcnJlY3QgYWNjZXB0IGNvbnRlbnQtdHlwZS5cbiAgICAgKiBJZiBubyBjb250ZW50IHR5cGUgaXMgZm91bmQgcmV0dXJuIHRoZSBmaXJzdCBmb3VuZCB0eXBlIGlmIHRoZSBjb250ZW50VHlwZXMgaXMgbm90IGVtcHR5XG4gICAgICogQHBhcmFtIGFjY2VwdHMgLSB0aGUgYXJyYXkgb2YgY29udGVudCB0eXBlcyB0aGF0IGFyZSBhdmFpbGFibGUgZm9yIHNlbGVjdGlvbi5cbiAgICAgKiBAcmV0dXJucyB0aGUgc2VsZWN0ZWQgY29udGVudC10eXBlIG9yIDxjb2RlPnVuZGVmaW5lZDwvY29kZT4gaWYgbm8gc2VsZWN0aW9uIGNvdWxkIGJlIG1hZGUuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdEhlYWRlckFjY2VwdChhY2NlcHRzOiBzdHJpbmdbXSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChhY2NlcHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBhY2NlcHRzLmZpbmQoKHg6IHN0cmluZykgPT4gdGhpcy5pc0pzb25NaW1lKHgpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY2VwdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIE1JTUUgaXMgYSBKU09OIE1JTUUuXG4gICAgICogSlNPTiBNSU1FIGV4YW1wbGVzOlxuICAgICAqICAgYXBwbGljYXRpb24vanNvblxuICAgICAqICAgYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEY4XG4gICAgICogICBBUFBMSUNBVElPTi9KU09OXG4gICAgICogICBhcHBsaWNhdGlvbi92bmQuY29tcGFueStqc29uXG4gICAgICogQHBhcmFtIG1pbWUgLSBNSU1FIChNdWx0aXB1cnBvc2UgSW50ZXJuZXQgTWFpbCBFeHRlbnNpb25zKVxuICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgZ2l2ZW4gTUlNRSBpcyBKU09OLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgcHVibGljIGlzSnNvbk1pbWUobWltZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGpzb25NaW1lOiBSZWdFeHAgPSBuZXcgUmVnRXhwKCdeKGFwcGxpY2F0aW9uXFwvanNvbnxbXjsvIFxcdF0rXFwvW147LyBcXHRdK1srXWpzb24pWyBcXHRdKig7LiopPyQnLCAnaScpO1xuICAgICAgICByZXR1cm4gbWltZSAhPT0gbnVsbCAmJiAoanNvbk1pbWUudGVzdChtaW1lKSB8fCBtaW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhcHBsaWNhdGlvbi9qc29uLXBhdGNoK2pzb24nKTtcbiAgICB9XG59XG4iXX0=